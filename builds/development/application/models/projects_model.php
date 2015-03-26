<?php

class Projects_model extends CI_Model {
	
	public function __construct(){
		parent::__construct();
	}

	public function getProject($slug){
		$project = $this->db->get_where('tbl_projects', array('projects_shortname' => $slug));
		return $project->result();
	}

	public function getAll(){
		$project = $this->db->get('tbl_projects');
		return $project->result();
	}
	
}