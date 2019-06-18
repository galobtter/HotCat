<?php

class ApiCategoryEdit extends ApiBase {
    public function execute() {

    }

    /** @inheritDoc */
	public function needsToken() {
		return 'csrf';
	}
	/** @inheritDoc */
	public function isWriteMode() {
		return true;
	}

    protected function getAllowedParams() {
    
    }
}