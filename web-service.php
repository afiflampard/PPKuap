<?php
REQUIRE_ONCE('koneksi.php');
$QUERY = MYSQLI_QUERY($conn, "SELECT * FROM mahasiswa");
$result = array();
while ($row = mysqli_fetch_assoc($QUERY)){
    $mhs = new stdClass;
    $mhs-> NIM = $row['NIM'];
    $mhs-> Nama = $row['Nama'];
    $mhs-> Jurusan = $row['Jurusan'];
    $mhs-> Fakultas = $row['Fakultas'];
    $mhs-> Alamat = $row['Alamat'];
    $mhs-> NoHp = $row['NoHp'];
    array_push($result, $mhs);
}
header('Content-Type:application/json;charset=utf-8');
ECHO JSON_ENCODE( $result);
MYSQLI_CLOSE($conn);
?>
