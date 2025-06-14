<template>
  <div>
    <a
      :href="fullRedirectDestUrl"
      :title="redirectDestUrl"
      class="go"
      rel="noopener"
      target="_blank"
    >{{ redirectDestUrl }}</a>
  </div>
</template>

<script>
import DOMPurify from "dompurify";

export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    redirectDestUrl: function () {
      let value = this.rowData.redirectDestUrl;
      if (value === '') {
        return '';
      }
      value = DOMPurify.sanitize(value);
      value = encodeURI(value);
      return value;
    },
    fullRedirectDestUrl: function () {
      let url = this.redirectDestUrl;
      let absoluteUrl = new RegExp('^(?:[a-z]+:)?//', 'i');
      if (!absoluteUrl.test(url) && !url.includes('$')) {
        // If the incoming URL has a leading /, Craft won't try to make a full URL out of it
        url = Craft.getUrl(url.replace(/^\/+/g, ''), null, this.rowData.siteBaseUrl);
      }
      return url;
    }
  }
}
</script>
