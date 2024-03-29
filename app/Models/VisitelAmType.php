<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitelAmType extends Model
{
    use HasFactory;

    public function visitel_user()
    {
        return $this->belongsTo(VisitelUser::class, 'visitel_am_types_id');
    }
}
