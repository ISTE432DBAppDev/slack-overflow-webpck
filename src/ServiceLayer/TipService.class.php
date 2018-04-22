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
   * @return string|resource
   */
  public function createTip($accountID, $language, $description) {
    $accountID = filter_var($accountID, FILTER_SANITIZE_NUMBER_INT);
    $language = filter_var($language, FILTER_SANITIZE_STRING);
    $description = filter_var($description, FILTER_SANITIZE_STRING);

    $status = $this -> getDataClass() -> createTip($accountID, $language, $description);
      return '{"data":' . $status . '}';
  }

    /**
     * @param $language
     * @return string|resource
     */
    public function getAllTipsForLanguage($language) {
        $allTips = $this -> getDataClass() -> getAllTipsForLanguage($language);
        $allTipObjects = array();
        foreach ($allTips as $tip){
            $tipObject = new Tip($tip['tipsID'], $tip['accountsID'], stripslashes($tip['language']), stripslashes($tip['description']), $tip['rating']);
            array_push($allTipObjects,$tipObject);
        }
        $allTipObjectsAsJSON = json_encode($allTipObjects);
        return $allTipObjectsAsJSON;
    }

  /**
   * @param $tipID
   * @return string|resource
   */
  public function upvoteTip($tipID) {
    $tipID = filter_var($tipID, FILTER_SANITIZE_NUMBER_INT);
    $status = $this -> getDataClass() -> upvoteTip($tipID);
      return '{"data":' . $status . '}';
  }

  /**
   * @param $tipID
   * @return string
   */
  public function downvoteTip($tipID) {
    $tipID = filter_var($tipID, FILTER_SANITIZE_NUMBER_INT);
    $status = $this -> getDataClass() -> downvoteTip($tipID);
      return '{"data":' . $status . '}';
  }
}
