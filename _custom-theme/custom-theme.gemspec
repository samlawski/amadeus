# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "custom-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Samuel Boguslawski"]
  spec.email         = ["mail@samuelboguslawski.com"]

  spec.summary       = %q{Custom Website Theme}
  spec.homepage      = "https://samuelboguslawski.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|_sass|assets|LICENSE|README)/i}) }
  # Note: Add new folders such as '_sass' to the list above

  spec.add_development_dependency "jekyll", "~> 3.8.5"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
