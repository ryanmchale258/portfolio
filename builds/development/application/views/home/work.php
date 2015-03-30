<div id="work" class="work layout">
	<section class="innerwrap">
		<div class="innercontent">
			<h2>Projects</h2>
			<div class="projgrid">
				<?php foreach($projects as $row): ?>
					<a class="block-grid" href="<?php echo base_url() . index_page(); ?>work/<?php echo $row->projects_shortname; ?>"><img src="<?php echo base_url(); ?>images/portfolio/icon-<?php echo $row->projects_shortname; ?>.png" alt="<?php echo $row->projects_title; ?>"></a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
</div>