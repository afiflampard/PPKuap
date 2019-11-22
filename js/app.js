var dataObject = [{
    "nim": "125060400111044", 
    "nama": "Isyana Sarasvati",
    "jurusan": "Teknik Informatika", 
    "fakultas": "Filkom", 
    "alamat": "Jl. Suka Nyanyi",
    "noHP": "081234567890"
},
{
    "nim": "135060401111005", 
    "nama": "Marion Jola",
    "jurusan": "Komunikasi", 
    "fakultas": "FISIP", 
    "alamat": "Kec. Wakanda",
    "noHP": "08765432109"
},
{
    "nim": "175150201111006", 
    "nama": "Afif Musyayyidin",
    "jurusan": "Informatika", 
    "fakultas": "Filkom", 
    "alamat": "Kec. Malang",
    "noHP": "085646976880"
},
];
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
        for (var i in dataObject) {
            var appendList = '<li><a href = "#page-two?id=' + dataObject[i].nim +
                '"target="_self" id="detail-mhs" data-nimmhs="' + dataObject[i].nim + '"><h2>' + dataObject[i].nama +
                '</h2><p>' + dataObject[i].nim + '</p><p><b>' + dataObject[i].fakultas + '</b></p><li>'
            $('#list-mhs').append(appendList);
        }
    },
    initShowDetailMhs: function (nim) {
        var appendDetail = "";
        var tbdy = $("#table-detailMhs tbody");
        var i;
        for (i = 0; i < dataObject.length; i++) {
            if(dataObject[i].nim == nim && tbdy.children().length == 0){
            appendDetail = '<tr><td>' + dataObject[i].nim + '</td><td>' + dataObject[i].nama +
            '</td><td>' + dataObject[i].jurusan + '</td><td>' + dataObject[i].fakultas+ '</td><td>'
            + dataObject[i].alamat+ '</td><td>' + dataObject[i].noHP+ '</td></tr>';
             };
        }
        $('#table-detailMhs').append(appendDetail);
    }
};
