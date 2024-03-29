<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $table = 'reports';

    protected $fillable = ['server_id', 'server_type', 'errors', 'message'];

    protected $hidden = [];
    
}
