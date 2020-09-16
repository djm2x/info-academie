<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Tymon\JWTAuth\Facades\JWTAuth as FacadesJWTAuth;

class AccountController extends SuperController
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // $request->email
        $email = $request->get('email');
        $password = $request->get('password');

        $user = $this->_context
            ->where('email', $email)
            ->first()
            ;

        if ($user == null) {
            return ['code' => -1];
        } else if ($user->password != $password) {
            return ['code' => 0];
        }

        $user->password = "";

        return ['code' => 1, 'user' => $user, 'token' => $this->createToken($user)];
    }

    public function register(Request $request)
    {
        $user = $this->_context
            ->where('email', $request->get('email'))
            ->first()
            ;

        if ($user != null) {
            return [
                'code' => -1,
                'message' => "Email existe deja : {$request->get('email')}"
            ];
        }

        // $data = User::create(['name'=>'first']);
        // dd($data->id);

        // $data = new User;
        // $data->name = 'Test';
        // $data->save();

        return $this->_context->create($request->all());
    }

    public function createToken($user) {

        // $customClaims = ['role' => $user->role];

        // JWTAuth::attempt($credentials, $customClaims);
        $customClaims = ['myrole' => $user->role];

        // $payload = JWTFactory::make($customClaims);

        // $token = JWTAuth::encode($payload);

        // $factory = JWTFactory::customClaims([
        //     'sub'   => env('API_ID'),
        // ]);

        // $payload = JWTFactory::customClaims(['id' => 'ff'])->make();
        // $token = JWTAuth::encode($payload);
        // or
        $user->customField = 'mourabit';
        $token = FacadesJWTAuth::fromUser($user, $customClaims);


        return $token;
    }


    // $data = $request->validate([
    //     'email' => 'required|email',
    //     'password' => 'required'
    // ]);

    // $user = User::where('email', $request->email)->first();

    // if (!$user || !Hash::check($request->password, $user->password)) {
    //     return response([
    //         'message' => ['These credentials do not match our records.']
    //     ], 404);
    // }

    // $token = $user->createToken('my-app-token')->plainTextToken;

    // $response = [
    //     'user' => $user,
    //     'token' => $token
    // ];

    // return response($response, 201);
}
