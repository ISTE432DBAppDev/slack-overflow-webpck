<?php
/**
 * Class: Tip
 * Date: 4/7/2018
 * Description:
 */

class Tip implements JsonSerializable {
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
  private $languageID;
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
  public function __construct($tipID, $accountID, $languageID, $description, $rating) {
    $this -> tipID = $tipID;
    $this -> accountID = $accountID;
    $this -> languageID = $languageID;
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
  public function getLanguageID() {
    return $this -> languageID;
  }

  /**
   * @param mixed $language
   */
  public function setLanguage($languageID) {
    $this -> languageID = $languageID;
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

  public function jsonSerialize() {
        return array(
            'tipsid' => $this -> tipID,
            'accountid' => $this -> accountID,
            'languageid' => $this -> languageID,
            'description' => $this -> description,
            'rating' => $this -> rating
        );
  }
}
