require 'pry'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'active_support/all'


get '/' do
  erb :index
  # File.read(File.join('views', 'index.html'))
end