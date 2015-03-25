<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Send extends CI_Controller {

	public function __construct() {
	    parent::__construct();
	    $this->load->library('email');
	    $this->load->model('projects_model');
	}

	public function form()	{
		// $message = array(
		// 	'messages_name' => set_value('name'),
		// 	'messages_email' => set_value('email'),
		// 	'messages_message' => set_value('message'),
		// );
		$this->email->from($this->input->post('email'), $this->input->post('name'));
		$this->email->to('ryan.mchale258@gmail.com'); 

		$this->email->subject($this->input->post('interest'));
		$this->email->message($this->input->post('interest'), $this->input->post('description'));	

		$this->email->send();

		redirect('send/thankyou');
	}

	public function thankyou() {
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