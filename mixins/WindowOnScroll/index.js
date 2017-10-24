const WindowOnScroll = {
  __frmBtm : 0,
  created: function () {
    window.addEventListener('scroll', this.__onWindowScroll);
  },
  methods: {
    __onWindowScroll: function (e) {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
        if (!WindowOnScroll.__frmBtm) {
          WindowOnScroll.__frmBtm = 1
          this.onWindowScrolledBottom()
        }
      } else if (window.pageYOffset <= 0) {
          this.onWindowScrolledTop()
      } else {
        WindowOnScroll.__frmBtm = 0
        this.onWindowScroll()
      }
    },
    onWindowScrolledTop:function() {},
    onWindowScroll: function(){},
    onWindowScrolledBottom: function() {}
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.__onWindowScroll)
  }
}

export default WindowOnScroll