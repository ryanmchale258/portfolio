<?php

class Blogs_model extends CI_Model {
	
	public function __construct(){
		parent::__construct();
	}

	public function getBlog($record){
		$blog = $this->db->get_where('tbl_blog', array('blog_id' => $record));
		return $blog->row();
	}

	public function getThree(){
		$blogs = $this->db->get('tbl_blog', 3);
		return $blogs->result();
	}
	
}