<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('participants', function (Blueprint $table) {
            $table->id();
            $table->string('username', 45)->nullable(false)->unique();
            $table->string('email', 45)->nullable()->unique();
            $table->string('password')->nullable(false);
            $table->string('name')->nullable();
            $table->enum('role', ['GUEST', 'CREATOR', 'ADMIN'])->default('GUEST');
            $table->string('avatar', 100)->nullable();
            $table->boolean('enabled')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participants');
    }
};