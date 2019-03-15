<?php

class HotCatHooks {
	public static function onLinksUpdateComplete( &$linksUpdate ) {
		$content = $linksUpdate->getRevision()->getContent();
		$categories = $linksUpdate->getParserOutput()->getCategoryLinks();
		foreach ( $categories as &$category ) {
			/* Find which categories are in $content and thus editable. */
			$title = $content->getTitle();
			$namespace = $title->getNamespace();
		}
	}

	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
		$out->addModules( 'ext.hotcat' );
	}
}