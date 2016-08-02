    1. Make Model and Migration:
    	php artisan make:model Group -m
    	or
    	php artisan make:migration create_groups_table --table=groups
    	php artisan make:model Group
    
    2. Run migration:
    	php artisan migrate
    
    3. Make Seeder:
    	php artisan make:seeder GroupTableSeeder
    
    4. Run seeder:
    	php artisan db:seed
    
    5. Foreign key relations:
    		$table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');
    
    6. For pagination with links like: http://localhost:8000/contacts?group_id=3&page=2
    	{{$contacts->appends(Request::query())->links()}}
    
    7: Form without collective:
    	<input type="hidden" name="_token" value="{{ csrf_token() }}"
    
    8. Form with html collective
    	{!! Form::open(['route' => 'contacts.store', 'files'=>true]) !!}//contacts is a route name here
    
    	{!! Form::input('student_name', null, ['class'=>'form-control']) !!}
    	{!! Form::email('email', null, ['class'=>'form-control'])!!}
    
    9. Validate input
        $this->validate($request, $rules);
