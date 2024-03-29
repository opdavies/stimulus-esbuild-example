{
  description = "An example application that uses Stimulus with esbuild.";

  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs = { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};

      inherit (pkgs) mkShell;
    in {
      devShells.${system}.default = mkShell {
        buildInputs = with pkgs; [ just nodejs simple-http-server ];
      };

      formatter.${system} = pkgs.nixfmt;
    };
}
