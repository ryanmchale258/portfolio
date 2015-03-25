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
		$data['specialScripts'] = array('js/main.js', 'js/work.js');
		$data['dAtts'] = 'data-top="box-shadow: 0px 0px 0px #333; "data--100-top="box-shadow: 0px 3px 10px #333;" data-anchor-target="#hero"';
		$data['mAtts'] = 'data-top="box-shadow: 0px 0px 0px #333;" data--50-top="box-shadow: 2px 3px 10px #333;" data-anchor-target="#hero"';
		$data['allprojects'] = $this->projects_model->getAll();
		
		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('thankyou');
		$this->load->view('work');
		$this->load->view('template/close');
	}

}