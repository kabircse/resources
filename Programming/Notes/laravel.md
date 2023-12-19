        1. Make Model,Migration and Resource Controller:
                php artisan make:model -mcr
        2. Make Model and Migration:
        	php artisan make:model Group -m
        	or
        	php artisan make:migration create_groups_table --table=groups
        	php artisan make:model Group
        
        3. Run migration:
        	php artisan migrate
        
        4. Make Seeder:
        	php artisan make:seeder GroupTableSeeder
        
        5. Run seeder:
        	php artisan db:seed
        
        6. Foreign key relations:
        		$table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');
        
        7. For pagination with links like: http://localhost:8000/contacts?group_id=3&page=2
        	{{$contacts->appends(Request::query())->links()}}
        
        8: Form without collective:
        	<input type="hidden" name="_token" value="{{ csrf_token() }}"
        
        9. Form with html collective
        	{!! Form::open(['route' => 'contacts.store', 'files'=>true]) !!}//contacts is a route name here
        
        	{!! Form::input('student_name', null, ['class'=>'form-control']) !!}
        	{!! Form::email('email', null, ['class'=>'form-control'])!!}
        
        10. Validate input
            $this->validate($request, $rules);
            
        11. Common php artisan command:
            Before Live/Production:
                php artisan key:generate    
                php artisan view:clear, php artisan cache:clear, php artisan config:clear,             
                php artisan clear-compiled
                composer install --optimize-autoloader --no-dev
                composer dump-autoload -o
            After Live:            
                php artisan config:cache, php artisan route:cache            
                composer dump-autoload -o
         12. Give your application a name
                php artisan app:name YourAppName

Laravel request validation for api/web smart single way for all:
Write this function to your request class after rules()

        public function failedValidation(Validator $validator)
        {
           throw new HttpResponseException(response()->json([
             'success'   => false,
             'message'   => 'Validation errors',
             'data'      => $validator->errors()
           ]));
        }
