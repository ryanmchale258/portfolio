<nav id="topnav">
	<div class="innernav">
		<ul>
			<li><a href="<?php if($bodyclass != 'home'){ echo base_url() . index_page(); } ?>#hero">Home</a></li>
			<li class="pre"><a href="<?php if($bodyclass != 'home'){ echo base_url() . index_page(); } ?>#bio">Bio</a></li>
			<li class="scrLogo"><a href="<?php echo base_url() . index_page(); ?>home"><img src="<?php echo base_url(); ?>images/icon.svg" /></a></li>
			<li><a href="<?php if($bodyclass != 'home'){ echo base_url() . index_page(); } ?>#work">Work</a></li>
			<li><a href="<?php if($bodyclass != 'home'){ echo base_url() . index_page(); } ?>#contact">Contact</a></li>
		</ul>
	</div>
</nav>