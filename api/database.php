<?php 
	$host		= "localhost";
	$user		= "root";
	$pass		= "505aea3e34d14b37";
	$charset 	= "utf8";
	$database 	= "search_and_rescue";

	$dsn = "mysql:host=$host;dbname=$database;charset=$charset";

	$pdo = new PDO($dsn, $user, $pass);

	function get_user_role($pdo, $user_id) {
		$arg = array( $user_id );
		$sql = "SELECT Role FROM user WHERE id = ?";

		$prep = $pdo->prepare($sql);
		$ok = $prep->execute($arg);

		if ($ok & $prep->rowCount() > 0) {
			$row = $prep->fetch();
			return $row["Role"];
		}
	}
?>
