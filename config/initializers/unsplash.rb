require 'unsplash'


Unsplash.configure do |config|
    config.application_access_key=ENV['KEY']
    config.application_secret = ENV['SECRET_KEY']
    config.utm_source = "spotfinder"
end


result = Unsplash::Photo.search('food')
result.map do |obj|
   puts obj.to_h[:urls]["small"]
end