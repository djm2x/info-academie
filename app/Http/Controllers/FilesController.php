<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class FilesController extends Controller
{

    public function uploadFiles(Request $request, string $folder) // : Collection
    {
        $request->validate([
            // 'file' => 'required|mimes:pdf,xlx,csv|max:2048',
            // 'file' => 'required',
            // 'file'=> 'required|mimes:mp4|max:4096',
        ]);

        $allowedfileExtension = ['pdf', 'jpg', 'png', 'docx'];

        $length =  $request->get('length');

        if ($length != 0/*$request->hasFile('file0')*/) {

            $filesAdded = [];
            for ($i=0; $i < $length; $i++) {

                $file = $request->file("file_{$i}");

                $filename = $file->getClientOriginalName();
                // $extension = $file->getClientOriginalExtension();

                $file->move(public_path(str_replace('_', '/', $folder)), $filename);

                array_push($filesAdded, str_replace('_', '/', $folder)."/{$filename}");
            }

            return [
                "message" => "Images Uploaded Succesfully",
                "filesUploaded" => $filesAdded,
            ];
        } else {
            return response()->json(["message" => "Select file first."]);
        }
    }

    public function angEditorUploadImage(Request $request, string $folder) // : Collection
    {
        $file = $request->file('file');
        // $uploaddir = 'img/';
        $filename = $file->getClientOriginalName();
        // $destination_path = $uploaddir;

        if ($file->move(public_path($folder), $filename)) {
            return json_encode($this->addImage($folder, $filename));
        } else {
            return json_encode(['response' => 'error']);
        }
    }

    public function addImage($folder, $filename)
    {
        $path = request()->getSchemeAndHttpHost() . '/' . $folder . '/' . $filename;

        // if (Image::create(['name'=>$filename, 'path'=>$path])) {

        //     return [
        //         'status' => true,
        //         'originalName' => $filename,
        //         'generatedName' => $filename,
        //         'msg'=>"Image upload successful",
        //         'imageUrl' => $path
        //     ];
        // }
        // return ['response'=>'error'];

        return [
            // 'status' => true,
            // 'originalName' => $filename,
            // 'generatedName' => $filename,
            // 'msg'=>"Image upload successful",
            'imageUrl' => $path
        ];
    }



    public function deleteFiles(Request $request)
    {

        $filenames = $request->input('filenames');
        $folder = $request->input('folder');

        // $folder = str_replace('_', '/', $folder);
        $filesDeleted = [];
        $path = '';
        foreach ($filenames as $filename) {
            // Storage::disk('public')->delete("{$folder}/{$file}");
            $path = str_replace('\\', '/', public_path(str_replace('_', '/', $folder))."\\".$filename);
            $deleted = File::delete($path);

            // if (File::exists($path)) {
            //     try {
            //         // unlink($path);
            //     } catch (\Throwable $th) {

            //     }
            // }
            array_push($filesDeleted, "{$folder}/{$filename}");
        }

        return [
            // 'message' => count($filenames) == 0 ? "empty files" : "delete successfuly",
            'fileDeleted' => $filesDeleted,
            // 'path' => $path,
            // 'deleted' => $deleted,
            // 'existe' => File::exists($path)
        ];
    }

    public function uploadFiles0(Request $request, string $folder) // : Collection
    {
        $request->validate([
            // 'file' => 'required|mimes:pdf,xlx,csv|max:2048',
            // 'file' => 'required',
            // 'file'=> 'required|mimes:mp4|max:4096',
        ]);

        $allowedfileExtension = ['pdf', 'jpg', 'png', 'docx'];

        $length =  $request->get('length');

        if ($length != 0/*$request->hasFile('file0')*/) {

            $filesAdded = [];
            for ($i=0; $i < $length; $i++) {

                $file = $request->file("file_{$i}");

                $filename = $file->getClientOriginalName();
                // $extension = $file->getClientOriginalExtension();

                $file->move(public_path(str_replace('_', '/', $folder)), $filename);

                array_push($filesAdded, str_replace('_', '/', $folder)."/{$filename}");
            }

            return [
                "message" => "Images Uploaded Succesfully",
                "filesUploaded" => $filesAdded,
                // "files" => $files,
                // "i" => $i,
            ];
        } else if ($request->hasFile('files') || $request->file('files') != null) {


            $file = $request->file('files');
            $filename = $file->getClientOriginalName();
            // $filename = $request->file->getClientOriginalName();


            // $filePath = $request->file('file')->storeAs(str_replace('_', '\\', $folder), $filename, 'public');

            $file->move(public_path(str_replace('_', '\\', $folder)), $filename);


            // $path = Storage::putFileAs(
            //     str_replace('_', '\\', $folder), $file, $filename
            // );


            // $extension = $file->getClientOriginalExtension();

            // $picture = date('His') . '-' . $filename;

            // Storage::disk('public')->put($filename, 'Contents');
            // php artisan storage:link


            return response()->json([
                "message" => "Image Uploaded Succesfully",
            ]);
        }
        else {
            return ["message" => "Select image first.", 'filesUploaded' => $request->hasFile('file')];
        }
    }
}
