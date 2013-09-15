require 'pry'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'active_support/all'


get '/' do
  "Hello World"
end