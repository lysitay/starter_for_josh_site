<?php
/*
Template Name: Projects
*/
?>
<?php require_once('page_header.php'); /* Tells WordPress to include header.php */ ?>
<div class="container-fluid maincontainer">
    <div class="container">
        <div class="row">
            <section class="maintext">              
            <?php 
$args = array(
  'category_name' =>  'Projects',
 // 'posts_per_page'    =>   1
);
// the query
$the_query = new WP_Query( $args ); ?>
 
<?php if ( $the_query->have_posts() ) : ?>
 
    <!-- pagination here -->
 
    <!-- the loop -->
    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
    <h2><?php the_title(); ?></h2> 
    <div>
<?php
                if ( has_post_thumbnail() ) { // check if the post has a Post Thumbnail assigned to it.
                    the_post_thumbnail('thumbnail');
                } ?>
<p class="about-text"><?php the_excerpt(); ?></p></div>
    <a class="readmore" href="<?php the_permalink(); ?>"> CONTINUE READING</a>
    <?php endwhile; ?>
    <!-- end of the loop -->
 
    <!-- pagination here -->
 
    <?php wp_reset_postdata(); ?>
 
<?php else : ?>
    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>

</section>
           
     </div>
    </div>
  </div>
<?php get_footer(); ?>
