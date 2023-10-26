<template>
  <div>
    <a
      :href="linkHref"
      :title="linkTitle"
      class="go"
    >{{ rowData.redirectSrcUrl }}</a>
  </div>
</template>

<script>
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
    linkHref: function () {
      let url = this.rowData.redirectSrcUrl;
      if (typeof url === 'undefined' || url === '') {
        return '';
      }
      let absoluteUrl = new RegExp('^(?:[a-z]+:)?//', 'i');
      if (!absoluteUrl.test(url) && !url.includes('$')) {
        // Strip off a leading `/` because otherwise `Craft.getUrl()` considers it an absolute URL and returns it
        url = url.replace(/^\//, '');
        url = Craft.getSiteUrl(url);
      }

      return url;
    },
    linkTitle: function () {
      let title = '';

      title += ('User Agent: ' + this.rowData.userAgent + "\n\n");
      title += ('Message: ' + this.rowData.exceptionMessage + "\n\n");
      title += ('File Path: ' + this.rowData.exceptionFilePath + "\n\n");
      title += ('Line No.: ' + this.rowData.exceptionFileLine);

      return title;
    }
  }
}
</script>
