var Application = {
    initApplication: function () {
        $(window).load('pageinit', '#page-one', function () {
            Application.initShowMhs();
        })
        $(document).on('click', '#detail-mhs', function () {
            var nim = $(this).data('nimmhs');
            Application.initShowDetailMhs(nim);
        })
    },
    initShowMhs: function () {
        $.ajax({
            url : 'https://afifmusyayyidin.000webhostapp.com/web-service.php',
            type : 'get',
            
            beforeSend : function(){
                $.mobile.loading('show', {
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function(dataObject){
                console.log("Success");
                var appendList = "";
                for(var i=0; i < dataObject.length; i++){
                    appendList = '<li><a href="#page-two?id='+
                        dataObject[i].NIM+'" target="_self" id="detail-mhs" data-nimmhs="'+
                        dataObject[i].NIM+'"><h2>'+dataObject[i].Nama+'</h2><p>'+dataObject[i].NIM+
                        '</p><p><b>'+dataObject[i].Fakultas+'</b></p></a></li>';
                        $('#list-mhs').append(appendList);
                        $('#list-mhs').listview('refresh');
                }
            },
            complete : function(){
                $.mobile.loading('hide');
            }
        });
    },
    initShowDetailMhs: function (nim) {
        $.ajax({
            url : 'https://afifmusyayyidin.000webhostapp.com/web-service.php',
            type : 'get',
            beforeSend : function(){
                $.mobile.loading('show', {
                    text : 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function(dataObject){
                for(var i = 0; i < dataObject.length; i++){
                    if(dataObject[i].NIM == nim){
                        $('#p-nim,#p-nama,#p-jurusan,#p-fakultas,#p-alamat,#p-nohp').empty();
                    $('#p-Nim').append('<b>NIM : </b>' +dataObject[i].NIM);
                    $('#p-Nama').append('<b>Nama : </b>' +dataObject[i].Nama);
                    $('#p-Jurusan').append('<b>Jurusan : </b>' +dataObject[i].Jurusan);
                    $('#p-Fakultas').append('<b>Fakultas : </b>' +dataObject[i].Fakultas);
                    $('#p-Alamat').append('<b>Alamat : </b>' +dataObject[i].Alamat);
                    $('#p-NoHp').append('<b>NoHP : </b>' +dataObject[i].NoHp);
                    }
                }
            },
            complete : function(){
                $.mobile.loading('hide');
            }
        });
    }
};
