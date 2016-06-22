<?php

namespace App\Http\Controllers\Servers;

use App\DedicatedServer;
use App\Favorite;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;

class DedicatedController extends Controller
{

    /**
     * Return all dedicated servers
     * @return mixed
     */
    public function showAll()
    {
        $results = DedicatedServer::with('provider')->get();

        if (count($results) > 0) {
            return response()->success($results);
        }

        return response()->success('There are no servers stored.');
    }

    /**
     * Get a single Dedicated server
     * @param Request $request
     * @return mixed
     */
    public function showOne(Request $request)
    {
        $this->validate($request, [
            'server_id' => 'required|numeric',
            'auth' => 'required'
        ]);

        $check = DedicatedServer::with('provider')->find($request->server_id);
        $check->views++;
        $check->save();

        $favored = false;

        if (!$check) {
            return response()->error('Server does not exist', 422);
        }

        if ($check && $request->auth == 'true'){
            $item = Favorite::whereUserId(JWTAuth::parseToken()->authenticate()->id)
                ->where('server_id', '=', $request->server_id)
                ->where('server_type', '=', 'dedicated')
                ->get();
            
            if(count($item)){
                $favored = true;
            }
        }

        return response()->success(['server' => $check, 'favored' => $favored]);
    }
}
