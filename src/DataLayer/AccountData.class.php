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
      pg_prepare($dbconn, "createAccountQuery", "INSERT INTO ACCOUNTS (username, password, salt) VALUES ($1, $2, $3)");
      $result = pg_execute($dbconn, "createAccountQuery", array($userName, $pwd));
      return $result;
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
      pg_prepare($dbconn, "loginAccountQuery", "SELECT accountID FROM ACCOUNTS WHERE username=$1 AND password=$2");
      $result = pg_execute($dbconn, "loginAccountQuery", array($userName, $pwd));

      $numRows = pg_num_rows($result);
      if ($numRows == 1) {
        return true;
      } else {
        return false;
      }

    } catch (Exception $e) {
      echo $e;
      return null;
    }
  }
  
  public function getAccountSalt($userName){
    try {
      $dbconn = $this -> getDBInfo();
      pg_prepare($dbconn, "getAccountSaltQuery", "SELECT salet FROM ACCOUNTS WHERE username=$1");
      $result = pg_execute($dbconn, "getAccountSaltQuery", array($userName));
      return $result;
      
    } catch (Exception $e) {
      echo $e;
      return null;
    }
  }
  
  
}

