<?php include 'header.php'; ?>
	<div class="container">
		<div align="center">
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
	<h2>SELAMAT DATANG DI HALAMAN UTAMA WEB SPP</h2>
	<H5>SMK WIRASWASTA CIMAHI</H5>
</br>

	<style >
    	.col-md-4col-md-offset-4{
    		margin-top: 20px;
    	}
    	body{
    		background:url('img/beasiswa.jpg');
    		background-size: 1768px 768px;
    	}
    </style>

</div>
</div>
<div class="container">
<section class="content">
</div>
</section>
<?php 
if(isset($_POST['Kirim'])){
if(empty($_POST['namaanda'])){
	$_POST['namaanda'];
}
if(empty($_POST['emailanda'])){
	$_POST['emailanda'];
}
if(empty($_POST['nama_penerima'])){
	$_POST['nama_penerima'];
}
if(empty($_POST['email_penerima'])){
	$_POST['email_penerima'];
}

$nama = $_POST['namaanda'];
$Email = $_POST['emailanda'];
$Penerima = $_POST['nama_penerima'];
$email_penerima = $_POST['email_penerima'];
$Pesan = $_POST['Pesan']; 
$header =$_POST['emailanda'];
$subject = $_POST['subjek'];
if(mail($email_penerima, $subjek, $Pesan)){
	echo "
	<Script>
	alert('pesan berhasil terkirim');
	document.location.href ='index.php';
	</Script>
	";
}else{
	echo "
	<Script>
	alert('email gagal dikirimkan, silahkan coba lagi');
	document.location.href ='index.php';
	</Script>
	";
}
}


 ?>
<?php include 'footer.php'; ?>