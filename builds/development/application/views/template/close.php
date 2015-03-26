
	<?php if(isset($initialize)): ?>
		<script><?php echo 'var ' . $initialize . ';'; ?></script>
	<?php endif; ?>
	<script src="<?php echo base_url(); ?>js/script.js"></script>
	<?php if(isset($initialize)): ?>
		<script><?php echo $initialize . '();'; ?></script>
	<?php endif; ?>
</body>
</html>