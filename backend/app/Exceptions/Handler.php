<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    protected $dontReport = [];

    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
}
