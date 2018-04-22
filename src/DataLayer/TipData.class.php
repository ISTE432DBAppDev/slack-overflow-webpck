<?php
/**
 * Class: TipData
 * Date: 4/4/2018
 * Description:
 */

class TipData {
  /**
   * @param $accountID
   * @param $language
   * @param $description
   * @return null|resource
   */
  public function createTip($accountID, $language, $description) {
    try {
      $dbconn = $this -> getDBInfo();
      pg_prepare($dbconn, "createTipQuery", "INSERT INTO TIPS (accountID, langauge, description, rating) VALUES ($1, $2, $3, 0)");
      $result = pg_execute($dbconn, "createTipQuery", array($accountID, $language, $description));
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
      //return $instance;
    } catch (Exception $e) {
      echo $e -> getMessage();
      return null;
    }
  }

    /**
     * @param $language
     * @return array|null|resource
     */
    public function getAllTipsForLanguage($language) {
        try {
            $dbconn = $this -> getDBInfo();
            $statement = $dbconn -> prepare("SELECT * FROM TIPS WHERE language = ?");
            $statement -> execute(array($language));
            $result = $statement -> fetchAll();
            return $result;
        } catch (Exception $e) {
            echo $e;
            return null;
        }
    }

  /**
   * @param $tipID
   * @return null|resource
   */
  public function upvoteTip($tipID) {
    try {
      $dbconn = $this -> getDBInfo();
      pg_prepare($dbconn, "upvoteTipQuery", "UPDATE TIPS SET rating = rating + 1 WHERE tipID = $1");
      $result = pg_execute($dbconn, "upvoteTipQuery", array($tipID));
      return $result;
    } catch (Exception $e) {
      echo $e;
      return null;
    }
  }

  /**
   * @param $tipID
   * @return null
   */
  public function downvoteTip($tipID) {
    try {
      $dbconn = $this -> getDBInfo();
      pg_prepare($dbconn, "downvoteTipQuery", "UPDATE TIPS SET rating = rating - 1 WHERE tipID = $1");
      $result = pg_execute($dbconn, "downvoteTipQuery", array($tipID));
      return $result;
    } catch (Exception $e) {
      echo $e;
      return null;
    }
  }
}
