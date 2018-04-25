<?php
include 'DatabaseConnection.class.php';

/**
 * Class: AccountData
 * Date: 4/4/2018
 * Description:
 */
class AccountData {

    /**
     * @param $userName
     * @param $pwd
     * @return null|resource
     */
    public function createAccount($userName, $pwd, $salt) {
        try {
            $dbconn = $this -> getDBInfo();
            $statement = $dbconn -> prepare("INSERT INTO ACCOUNTS (username, password, salt) VALUES (:username, :password, :salt)");

            $statement -> bindValue(':username', $userName);
            $statement -> bindValue(':password', $pwd);
            $statement -> bindValue(':salt', $salt);

            $statement -> execute();
        } catch (Exception $e) {
            echo $e;
            return null;
        }

    }

    /**
     * @return null|PDO
     */
    private function getDBInfo() {
        try {
            $instance = DatabaseConnection ::getInstance();
            return $conn = $instance -> getConnection();
        } catch (Exception $e) {
            echo $e -> getMessage();
            return null;
        }
    }

    /**
     * @param $userName
     * @param $pwd
     * @return bool|null
     */
    public function loginAccount($userName, $pwd) {
        try {
            $dbconn = $this -> getDBInfo();
            $statement = $dbconn -> prepare("SELECT accountID FROM ACCOUNTS WHERE username=? AND password=?");
            $statement -> execute(array($userName, $pwd));
            $result = $statement -> fetchAll();

            $numRows = count($result);
            if ($numRows == 1) {
                return '"True"';
            } else {
                return '"False"';
            }

        } catch (Exception $e) {
            echo $e;
            return null;
        }
    }

    public function getAccountSalt($userName) {
        try {
            $dbconn = $this -> getDBInfo();
            $statement = $dbconn -> prepare("SELECT salt FROM ACCOUNTS WHERE username=?");
            $statement -> execute(array($userName));
            $result = $statement -> fetchAll();

            $numRows = count($result);
            if ($numRows == 1) {
                return $result['0']['salt'];
            } else {
                return false;
            }

        } catch (Exception $e) {
            echo $e;
            return null;
        }
    }


}

