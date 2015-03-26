<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct() {
	    parent::__construct();
	    $this->load->helper('form');
	    $this->load->helper('captcha');
	    $this->load->model('projects_model');
	}

	public function index()	{
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['bodyclass'] = "home";
		$data['initialize'] = 'homeScript';
		
		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('home_hero');
		$this->load->view('template/close');
	}

}