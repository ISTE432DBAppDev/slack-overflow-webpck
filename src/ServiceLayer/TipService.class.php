<?php
require_once '../DataLayer/TipData.class.php';
require_once '../Models/Tip.class.php';

/**
 * Class: TipService
 * Date: 4/7/2018
 * Description:
 */

class TipService {

  /**
   * @var TipData
   */
  private $dataClass;

  /**
   * TipService constructor.
   */
  public function __construct() {
    $this -> dataClass = new TipData();
  }

  /**
   * @return TipData
   */
  public function getDataClass() {
    return $this -> dataClass;
  }


  /**
   * @param $accountID
   * @param $language
   * @param $description
   * @return null|resource
   */
  public function createTip($accountID, $language, $description) {
    $accountID = filter_var($accountID, FILTER_SANITIZE_NUMBER_INT);
    $language = filter_var($language, FILTER_SANITIZE_STRING);
    $description = filter_var($description, FILTER_SANITIZE_STRING);

    $status = $this -> getDataClass() -> createTip($accountID, $language, $description);
    return $status;
  }

  /**
   * @return array|resource
   */
  public function getAllTips() {
    $allTips = $this -> getDataClass() -> getAllTips();
    $allTipObjects = array();

    foreach ($allTips as $tip){
      $tipObject = new Tip($tip['tipID'], $tip['accountID'], stripslashes($tip['language']), stripslashes($tip['description']), $tip['rating']);
      array_push($allTipObjects,$tipObject);
    }

    //can then go through and make a loop that creates all the json
    return $allTipObjects;
  }

  /**
   * @param $tipID
   * @return null|resource
   */
  public function upvoteTip($tipID) {
    $tipID = filter_var($tipID, FILTER_SANITIZE_NUMBER_INT);
    $status = $this -> getDataClass() -> upvoteTip($tipID);
    return $status;
  }

  /**
   * @param $tipID
   * @return null
   */
  public function downvoteTip($tipID) {
    $tipID = filter_var($tipID, FILTER_SANITIZE_NUMBER_INT);
    $status = $this -> getDataClass() -> downvoteTip($tipID);
    return $status;
  }
}
