<div class="blog layout">
	<section class="innerwrap">
		<div class="innercontent">
			<?php foreach($blogs as $row): ?>
				<article class="preview">
					<h3><?php echo $row->blog_title; ?></h3>
					<p class="date"><?php echo $row->blog_date; ?></p>
					<p class="sample"><?php echo $row->blog_sample; ?></p>
					<a href="<?php echo base_url() . index_page(); ?>blog/<?php echo $row->blog_id; ?>" class="readmore">Read More...</a>
				</article>
			<?php endforeach; ?>
		</div>
	</section>
</div>