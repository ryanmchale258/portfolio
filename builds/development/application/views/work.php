<section id="workwrapper">
	<div id="work">
		<div class="row">
			<div class="small-10 large-8 small-centered columns">
				<h2 id="worktitle">My Work</h2>
				<ul class="small-block-grid-5">
					<?php foreach($allprojects as $row): ?>
						<li class="buttonholder"><img id="<?php echo $row->projects_id; ?>" class="sliderbuttons" src="<?php echo base_url(); ?>images/<?php echo $row->projects_icon; ?>" alt="<?php echo $row->projects_title; ?>"></li>
					<?php endforeach; ?>
				</ul>
			</div>
			<div id="projectslider" class="small-10 small-centered columns">
				<div id="slidesrow">
					<?php foreach($allprojects as $row): ?>
					<div class="slide">
						<h2><?php echo $row->projects_title; ?></h2>
						<a href="<?php echo base_url() . index_page(); ?>work/<?php echo $row->projects_shortname; ?>"><img src="<?php echo base_url(); ?>images/<?php echo $row->projects_comp; ?>" alt="<?php echo $row->projects_title; ?>"></a>
						<p>Click for details.</p>
					</div>
					<?php endforeach; ?>
				</div>
				<a id="coverlink"><div id="slidercover"></div></a>
			</div>
		</div>
	</div>
	<div id="ns_work" class="row">
		<?php foreach($allprojects as $row): ?>
			<div class="small-10 small-centered large-12 columns">
				<div class="row">
					<div class="ns_iconholder small-12 medium-4 columns">
						<a href="<?php echo base_url(); ?>work/<?php echo $row->projects_shortname; ?>"><img src="<?php echo base_url(); ?>images/<?php echo $row->projects_icon; ?>" alt="<?php echo $row->projects_title; ?>"></a>
					</div>
					<div class="small-12 medium-8 columns">
						<h2><?php echo $row->projects_title; ?></h2>
						<p><?php echo $row->projects_headline; ?></p>
					</div>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
</section>