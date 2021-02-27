<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Str;

class ConvertResponseFieldsToCamelCase
{
    // /**
    //  * Handle an incoming request.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  \Closure  $next
    //  * @return mixed
    //  */
    // public function handle($request, Closure $next)
    // {
    //     return $next($request);
    // }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $content = $response->getContent();

        try {
            $json = json_decode($content, true);
            $replaced = [];
            foreach ($json as $key => $value) {
                $replaced[Str::camel($key)] = $value;
            }
            $response->setContent($replaced);
        } catch (\Exception $e) {
          // you can log an error here if you want
        }

        return $response;
    }
}
