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

	public static function onResourceLoaderGetConfigVars( array &$vars ) {
		// FIXME - MediawikiServices seriously needs some better documentation
		// Maybe use global? Should be settable somewhere vaguely in LocalSettings or something
		$config = MediaWikiServices::getInstance()->getService();

		$vars['wgHotCatDefaultOptions'] = $config->get( 'wgHotCatDefaultOptions' );
		$vars['wgHotCatConfirmSaveNonAutoConfirm'] = $config->get( 'wgHotCatConfirmSaveNonAutoConfirm' );
	}
}