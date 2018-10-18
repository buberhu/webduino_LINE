+(function (window, document) {

  'use strict';

  function line_ifttt(event, key, v1, v2, v3) {
    var obj = {};
    if (v1 != "''" || v1.length > 0) {
      obj.value1 = v1;
    }
    if (v2 != "''" || v1.length > 0) {
      obj.value2 = v2;
    }
    if (v3 != "''" || v1.length > 0) {
      obj.value3 = v3;
    }
    var uri = 'https://maker.ifttt.com/trigger/' + event + '/with/key/' + key;
    $.post(uri, obj, function (e) {
      console.log(e);
    });
  }

  function line_notify(token, msg, stickerpackageid, stickerid, imagethumbnail, imagefullsize) {
    var data = {
      token: token
    };
	if (msg.length == 0) {
		msg = "''";
	}
	data.message = msg;
	if(stickerpackageid.length != 0 && stickerid.length != 0) {
		data.stickerPackageId = stickerpackageid;
        data.stickerId = stickerid;
	}
	if(imagethumbnail.length != 0 && imagefullsize.length != 0) {
		data.imageThumbnail = imagethumbnail;
        data.imageFullsize = imagefullsize;
	}

    $.post('https://script.google.com/macros/s/AKfycbx8CHul0yv0cPv-5DJLDz9hY1kZqQjm_7iLckjwKGEsjmtOuOc/exec',
      data,
      function (e) {
        console.log(e);
      });
  }

  function line_bot(token, uid, msg) {
    var data = {
      token: token,
      uid: uid
    };
    if (typeof msg != 'object') {
      data.type = 'text';
      data.text = msg;
    } else {
      if (msg.type == 'sticker') {
        data.type = 'sticker';
        data.text = '';
        data.packageId = msg.stickerPackageId;
        data.stickerId = msg.stickerId;
      } else if (msg.type == 'image') {
        data.type = 'image';
        data.text = '';
        data.previewImageUrl = msg.imageUri;
        data.originalContentUrl = msg.imageUri;
      }
    }
    $.post('https://script.google.com/macros/s/AKfycbwM1sSrweL1tv-UsyDnG-rUjMgXSzDLA1p5HAH64lXPOP8pcVE/exec',
      data,
      function (e) {
        console.log(e);
      });
  }

  window.line_ifttt = line_ifttt;
  window.line_notify = line_notify;
  window.line_bot = line_bot;

}(window, window.document));
