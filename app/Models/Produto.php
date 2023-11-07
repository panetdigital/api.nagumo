<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $fillable = [
        'nome', 'coditem', 'link', 'cod', 'imagem', 'grupo',
        // Adicione outros campos aqui, se necessário
    ];
    use HasFactory;
}
