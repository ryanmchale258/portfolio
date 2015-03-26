<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Thankyoutest extends CI_Controller {

	public function __construct() {
	    parent::__construct();
	    $this->load->model('projects_model');
	}

public function index()	{
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['bodyclass'] = "thanks";
		
		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('thankyou');
		$this->load->view('template/close');
	}

}