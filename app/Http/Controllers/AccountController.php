<?php

namespace App\Http\Controllers;

use App\Prof;
use App\Student;
use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use Tymon\JWTAuth\Claims\Issuer;
use Tymon\JWTAuth\Claims\IssuedAt;
use Tymon\JWTAuth\Claims\Expiration;
use Tymon\JWTAuth\Claims\NotBefore;
use Tymon\JWTAuth\Claims\Subject;
use Tymon\JWTAuth\Claims\JwtId;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;

// use Tymon\JWTAuth\Facades\JWTAuth as FacadesJWTAuth;

class AccountController extends SuperController
{
    public function __construct(User $model)
    {
        parent::__construct($model);

        // $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function broadcasting(Request $request)
    {
        if(true) {
            return response()->json(null, 201);
        } else {
            return response()->json('UNAUTENTICATED', 401);
        }
    }

    public function me()
    {
        return response()->json(auth());
    }

    public function getClaims(string $token)
    {
        // $token = JWTAuth::getToken();

        $payload = JWTAuth::decode($token);

        $r = $payload->get('role'); // return true or false
        return response()->json($r);
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
            return ['code' => -1, 'message' => 'Email érroné'];
        } else if ($user->password != $password) {
            return ['code' => 0, 'message' => 'Mot de passe érroné'];
        }

        // $user->password = "";
        $child = null;

        if ($user->role == 'student') {
            $child = Student::where('idUser', $user->id)->first();
        } else if ($user->role == 'prof') {
            $child = Prof::where('idUser', $user->id)->first();
        }

        return [
            'code' => 1,
            'user' => $user,
            // 'id' => $user->id,
            'child' => $child,
            'token' => $this->createToken($user),
            'message' => 'Connexion reussite'
        ];
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

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return string
     */
    protected function createToken($user) {

        // $customClaims = ['role' => $user->role];

        // JWTAuth::attempt($credentials, $customClaims);
        $customClaims = [
            'role' => $user->role,
            // 'id' => $user->id,
            // 'iss' => new Issuer('faker'),
            // 'iat' => new IssuedAt(Carbon::now('UTC')) ,
            // 'exp' => new Expiration(Carbon::now('UTC')->addDays(365)),
            // 'nbf' => new NotBefore(Carbon::now('UTC')),
            // 'sub' => new Subject('faker'),
            // 'jti' => new JwtId('faker'),
        ];


        // $data = JWTFactory::customClaims($customClaims);
        // $payload = JWTFactory::make($data);
        // $token = JWTAuth::encode($payload);

        // $payload = JWTFactory::make($customClaims);

        // $token = JWTAuth::encode($payload);

        // $factory = JWTFactory::customClaims([
        //     'sub'   => env('API_ID'),
        // ]);

        // $payload = JWTFactory::customClaims($customClaims)->make();
        // $token = JWTAuth::encode($payload);
        // or
        // $user->customField = 'mourabit';
        $token = JWTAuth::fromUser($user, $customClaims);


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
