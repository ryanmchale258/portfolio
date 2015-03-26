<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Work extends CI_Controller {

	public function __construct() {
	    parent::__construct();
	    $this->load->model('projects_model');
	}

	public function index(){
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['bodyclass'] = "nohero";
		$data['initialize'] = 'workScript';
		$data['allprojects'] = $this->projects_model->getAll();
		
		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('work');
		$this->load->view('template/close');
	}

	public function portfolio($slug)	{
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['bodyclass'] = 'portfolio';
		$data['record'] = $this->projects_model->getProject($slug);
		
		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('more_hero');
		$this->load->view('project');
		$this->load->view('template/close');
	}

}