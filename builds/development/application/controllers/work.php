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
		$data['specialScripts'] = array('js/main.js', 'js/work.js');
		$data['allprojects'] = $this->projects_model->getAll();
		
		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('work');
		$this->load->view('template/close');
	}

	public function beardbrand()	{
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['specialScripts'] = array('js/main.js', 'js/work.js');
		$data['dAtts'] = 'data-top="box-shadow: 0px 0px 0px #333; "data--100-top="box-shadow: 0px 3px 10px #333;" data-anchor-target="#hero"';
		$data['mAtts'] = 'data-top="box-shadow: 0px 0px 0px #333;" data--50-top="box-shadow: 2px 3px 10px #333;" data-anchor-target="#hero"';
		$data['record'] = $this->projects_model->getProject(1);
		$data['allprojects'] = $this->projects_model->getAll();
		//$data['bWith'] = $this->projects_model->getBuiltWith(1);
		
		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('more_hero');
		$this->load->view('project');
		$this->load->view('work');
		$this->load->view('template/close');
	}

	public function biglonely()	{
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['specialScripts'] = array('js/main.js', 'js/work.js');
		$data['dAtts'] = 'data-top="box-shadow: 0px 0px 0px #333; "data--100-top="box-shadow: 0px 3px 10px #333;" data-anchor-target="#hero"';
		$data['mAtts'] = 'data-top="box-shadow: 0px 0px 0px #333;" data--50-top="box-shadow: 2px 3px 10px #333;" data-anchor-target="#hero"';
		$data['record'] = $this->projects_model->getProject(2);
		$data['allprojects'] = $this->projects_model->getAll();

		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('more_hero');
		$this->load->view('project');
		$this->load->view('work');
		$this->load->view('template/close');
	}

	public function thinkmcfly()	{
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['specialScripts'] = array('js/main.js', 'js/work.js');
		$data['dAtts'] = 'data-top="box-shadow: 0px 0px 0px #333; "data--100-top="box-shadow: 0px 3px 10px #333;" data-anchor-target="#hero"';
		$data['mAtts'] = 'data-top="box-shadow: 0px 0px 0px #333;" data--50-top="box-shadow: 2px 3px 10px #333;" data-anchor-target="#hero"';
		$data['record'] = $this->projects_model->getProject(3);
		$data['allprojects'] = $this->projects_model->getAll();

		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('more_hero');
		$this->load->view('project');
		$this->load->view('work');
		$this->load->view('template/close');
	}

	public function mcore()	{
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['specialScripts'] = array('js/main.js', 'js/work.js');
		$data['dAtts'] = 'data-top="box-shadow: 0px 0px 0px #333; "data--100-top="box-shadow: 0px 3px 10px #333;" data-anchor-target="#hero"';
		$data['mAtts'] = 'data-top="box-shadow: 0px 0px 0px #333;" data--50-top="box-shadow: 2px 3px 10px #333;" data-anchor-target="#hero"';
		$data['record'] = $this->projects_model->getProject(4);
		$data['allprojects'] = $this->projects_model->getAll();

		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('more_hero');
		$this->load->view('project');
		$this->load->view('work');
		$this->load->view('template/close');
	}

	public function rezguide()	{
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['specialScripts'] = array('js/main.js', 'js/work.js');
		$data['dAtts'] = 'data-top="box-shadow: 0px 0px 0px #333; "data--100-top="box-shadow: 0px 3px 10px #333;" data-anchor-target="#hero"';
		$data['mAtts'] = 'data-top="box-shadow: 0px 0px 0px #333;" data--50-top="box-shadow: 2px 3px 10px #333;" data-anchor-target="#hero"';
		$data['record'] = $this->projects_model->getProject(5);
		$data['allprojects'] = $this->projects_model->getAll();

		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('more_hero');
		$this->load->view('project');
		$this->load->view('work');
		$this->load->view('template/close');
	}

}