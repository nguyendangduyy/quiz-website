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
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 45)->nullable(false);
            $table->longText('description')->nullable(false);
            $table->string('image')->nullable();
            $table->enum('difficulty', ['EASY', 'MEDIUM', 'HARD'])->nullable(false);
            $table->unsignedBigInteger('topic_id')->nullable(false);
            $table->unsignedBigInteger('created_by')->nullable(false);
            $table->timestamps();
            
            $table->foreign('topic_id')->references('id')->on('topics');
            $table->foreign('created_by')->references('id')->on('participants');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quizzes');
    }
};
