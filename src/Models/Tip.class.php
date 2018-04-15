<?php
/**
 * Class: Tip
 * Date: 4/7/2018
 * Description:
 */

class Tip {
  /**
   * @var
   */
  private $tipID;
  /**
   * @var
   */
  private $accountID;
  /**
   * @var
   */
  private $language;
  /**
   * @var
   */
  private $description;
  /**
   * @var
   */
  private $rating;

  /**
   * Tip constructor.
   * @param $tipID
   * @param $accountID
   * @param $language
   * @param $description
   * @param $rating
   */
  public function __construct($tipID, $accountID, $language, $description, $rating) {
    $this -> tipID = $tipID;
    $this -> accountID = $accountID;
    $this -> language = $language;
    $this -> description = $description;
    $this -> rating = $rating;
  }


  /**
   * @return mixed
   */
  public function getTipID() {
    return $this -> tipID;
  }

  /**
   * @param mixed $tipID
   */
  public function setTipID($tipID) {
    $this -> tipID = $tipID;
  }

  /**
   * @return mixed
   */
  public function getAccountID() {
    return $this -> accountID;
  }

  /**
   * @param mixed $accountID
   */
  public function setAccountID($accountID) {
    $this -> accountID = $accountID;
  }

  /**
   * @return mixed
   */
  public function getLanguage() {
    return $this -> language;
  }

  /**
   * @param mixed $language
   */
  public function setLanguage($language) {
    $this -> language = $language;
  }

  /**
   * @return mixed
   */
  public function getDescription() {
    return $this -> description;
  }

  /**
   * @param mixed $description
   */
  public function setDescription($description) {
    $this -> description = $description;
  }

  /**
   * @return mixed
   */
  public function getRating() {
    return $this -> rating;
  }

  /**
   * @param mixed $rating
   */
  public function setRating($rating) {
    $this -> rating = $rating;
  }
}
