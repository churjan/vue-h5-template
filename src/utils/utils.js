export default {
  install: function(Vue, options) {
    Vue.prototype.utils = {
      oneArrToTwoArr(arr, len = 2) {
        let oneArr = arr;
        let twoArr = [];
        let arrIdx = -1;
        oneArr.forEach((el, i) => {
          if (i % len == 0) {
            arrIdx += 1;
            twoArr[arrIdx] = [];
          }
          twoArr[arrIdx][i % len] = el;
        });
        return twoArr;
      },
      //判断图片的旋转方向
      getPhotoOrientation(img) {
        let orient;
        EXIF.getData(img, function() {
          // console.log(this);
          orient = EXIF.getAllTags(this).Orientation;
        });
        return orient;
      },
      //将base64转成blob
      dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(",")[1]);
        var mimeString = dataURI
          .split(",")[0]
          .split(":")[1]
          .split(";")[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
      },
      readFile(event, cb) {
        let file = event.target.files[0];
        // if (file.size / 1000 / 1000 > 5) {
        //   alert("图片不能大于5M");
        //   return;
        // }
        let reader = new FileReader();
        reader.onload = function(event) {
          let img = new Image();
          img.onload = function() {
            cb(img);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      },
      //图片预览
      showPic(img, el) {
        let cvs = document.createElement("canvas");
        let ctx = cvs.getContext("2d");
        // let MAX_WIDTH = window.innerWidth;
        let MAX_WIDTH = 300;
        let width = img.naturalWidth;
        let height = img.naturalHeight;
        let imgRatio = width / height;
        if (width > MAX_WIDTH) {
          width = MAX_WIDTH;
          height = width / imgRatio;
        }
        // polyfill 提供了这个方法用来获取设备的 pixel ratio
        let getPixelRatio = function(context) {
          let backingStore =
            context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio ||
            1;

          return (window.devicePixelRatio || 1) / backingStore;
        };

        let ratio = getPixelRatio(ctx);

        cvs.width = width * ratio;
        cvs.height = height * ratio;

        //如果需要显示canvas，则还要摄者style
        // cvs.style.width=width/2+'px';
        // cvs.style.height=height/2+'px';

        //获取图片方向
        function getPhotoOrientation(img) {
          let orient;
          EXIF.getData(img, function() {
            orient = EXIF.getAllTags(this).Orientation;
          });
          return orient;
        }
        //获取图片方向
        let orient = getPhotoOrientation(img);

        if (orient === 6) {
          //需要顺时针90度旋转
          cvs.width = height * imgRatio * ratio;
          cvs.height = width * imgRatio * ratio;
          ctx.rotate((90 * Math.PI) / 180);
          ctx.scale(imgRatio, imgRatio);
          ctx.drawImage(img, 0, -height * ratio, width * ratio, height * ratio);
        } else if (orient === 8) {
          //需要逆时针90度旋转
          cvs.width = height * imgRatio * ratio;
          cvs.height = width * imgRatio * ratio;
          ctx.rotate((-90 * Math.PI) / 180);
          ctx.scale(imgRatio, imgRatio);
          ctx.drawImage(img, -width * ratio, 0, width * ratio, height * ratio);
        } else if (orient === 3) {
          //需要180度旋转
          cvs.width = height * imgRatio * ratio;
          cvs.height = width * imgRatio * ratio;
          ctx.rotate((180 * Math.PI) / 180);
          ctx.scale(imgRatio, imgRatio);
          ctx.drawImage(
            img,
            -width * ratio,
            -height * ratio,
            width * ratio,
            height * ratio
          );
        } else {
          ctx.drawImage(img, 0, 0, width * ratio, height * ratio);
        }
        // document.body.appendChild(cvs)
        el.style.cssText = `
    width:${cvs.width / ratio}px;
    height:${cvs.height / ratio}px;
    margin: 0 auto;
    background:url("${cvs.toDataURL(
      "image/png",
      1
    )}") center/100% 100% no-repeat;
  `;
      }
    };
  }
};
