<?php
/**
 * Class: UserRatingData
 * Date: 4/4/2018
 * Description:
 */

class UserRatingData {

  /**
   * @param $accountID
   * @param $tipID
   * @return null|resource
   */
  public function createUserRating($accountID, $tipID) {
    try {
      $dbconn = $this -> getDBInfo();
      pg_prepare($dbconn, "createUserRatingQuery", "INSERT INTO USERRATING (accountID, tipsID) VALUES ($1, $2)");
      $result = pg_execute($dbconn, "createUserRatingQuery", array($accountID, $tipID));
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
   * @param $accountID
   * @param $tipID
   * @return bool|null
   */
  public function checkUserRating($accountID, $tipID) {
    try {
      $dbconn = $this -> getDBInfo();
      pg_prepare($dbconn, "checkUserRatingQuery", "SELECT * FROM USERRATING WHERE accountID = $1 AND tipID = $2");
      $result = pg_execute($dbconn, "checkUserRatingQuery", array($accountID, $tipID));

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
}
